const products=require("../models/tasks");


const getAllProducts=async (req,res)=>{
   const {featured,company,name,sort,fields,numericfields}=req.query;
    const queryObject={};
    if(featured){
        if(featured==="true"){
            queryObject.featured=true;
        }else{
            queryObject.featured=false;
        }
    }
    if(company){
        queryObject.company=company
    }
    if(name){
        queryObject.name={$regex:name, $options:"i"}
    }
    let result=products.find(queryObject)
    if(sort){
        const sortlist=sort.split(",").join(" ");
        result=result.sort(sortlist);
    }else{
        result=result.sort("date")
    }
    if(fields){
        const fieldslist=fields.split(",").join(" ");
        result=result.select(fieldslist)
    }
    if(numericfields){
        const operator_map={
            ">":"$gt",
            ">=":"$gte",
            "=":"$eq",
            "<=":"$lte",
            "<":"$lt",
        } 
        const regex=/\b(>|<|>=|<=|=)\b/g
        let filters=numericfields.replace(regex,(match)=>
        `-${operator_map[match]}-`
        )
        const options=["rating","price"];
        filters=filters.split(",").forEach((item) => {
        const [field,operator,value]=item.split("-")
            if(options.includes(field)){
                queryObject[field]={[operator]:Number(value)}
            }
    });
    const page=Number(req.query.page)||1;
    const limit=Number(req.query.limit)||8;
    const skip=(page-1)*limit;
    result=result.skip(skip).limit(limit);
    const Products=await result;
    res.json({
        Products,
        nbHits:Products.length
    }).status(200);
}
}

const getProductStatic=async (req,res)=>{
    
    const Products=await products.find({}).sort('-name price')
   
    res.json({
        Products,
        nbHits:Products.length
    }).status(200);
}
module.exports={getAllProducts,getProductStatic}