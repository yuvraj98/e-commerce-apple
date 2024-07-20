import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import products from "../components/Data/productData";
import Footer from "../components/Footer";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  function fetchProductData() {
    setLoading(true);
    try {
      setPosts(products);
    } catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="bg-richblue-25">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
      <Footer className = "mt-5"></Footer>
    </div>
  );
};

export default Products;
