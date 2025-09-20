import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="border rounded-lg overflow-hidden">
            <img src={Image1} alt="Earphone" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-bold">Enjoy</p>
              <p className="text-lg">With</p>
              <p className="text-lg">Earphones</p>
            </div>
          </div>
          
          {/* Second Column */}
          <div className="border rounded-lg overflow-hidden">
            <img src={Image2} alt="Watch" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-bold">Stay Connected</p>
              <p className="text-lg">With</p>
              <p className="text-lg">Smart Watches</p>
            </div>
          </div>

          {/* Third Column */}
          <div className="border rounded-lg overflow-hidden">
            <img src={Image3} alt="Macbook" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-bold">Powerful</p>
              <p className="text-lg">Performance</p>
              <p className="text-lg">With MacBook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;