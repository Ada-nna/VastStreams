const categories = ({ title, details }) => {
  return (
    <div >
      <div>
        <h1 className="text-[38px] font-semibold">{title}</h1>
        <p className="text-[#999999] text-[18px] mt-3">{details}</p>
      </div>
    </div>
  );
};

export default categories;
