import { useContext } from "react";
import { CategoryContext } from "../../App";

function Category(){
    let {categoryList} = useContext(CategoryContext);
    return <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            {categoryList.map((category,index)=>{return <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                    <div className="cat-item mb-4">
                        <div className="flex-fill d-flex justify-content-center align-items-center pl-3" style={{height:"50px"}}>
                            <h6>{category.name}</h6>
                        </div>
                    </div>
                </a>
            </div>})}
            
        </div>
    </div>
    </>
}

export default Category;