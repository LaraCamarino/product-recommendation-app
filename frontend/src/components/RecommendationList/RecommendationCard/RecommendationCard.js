const RecommendationCard = ({ product }) => {
  return (
    <div className="group h-[280px] bg-[#00D1FF] relative overflow-hidden rounded-[40px] p-8 flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.02]">
      <div className="absolute top-8 right-8 w-28 h-28 pointer-events-none transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img 
          src="https://assets.pluga.co/apps/icons/rd_station_crm/rd_station_crm-icon.svg" 
          alt="Product"
          className="w-full h-full object-contain"
          />
      </div>

      <div className="flex-grow"></div>
      
      <div className="relative z-10 text-left">
        <h3 className="text-[#113d4c] text-2xl font-black mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-[#113d4c]/80 text-lg font-medium leading-snug">
          {product.description}
        </p>
      </div>        
    </div>
  );
};

export default RecommendationCard;