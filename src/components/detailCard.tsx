type DetailCardProps = {
  label: string;
  value: string;
  icon: string;
};

const DetailCard = ({ label, value, icon }: DetailCardProps) => (
  <div className='w-95px h-120px flex flex-col items-center gap-1 py-3 px-2 rounded-xl shadow text-center bg-white/20'>
    <img src={icon} alt={value} className='w-40px h-40px' />
    <p className='text-sm text-white'>{label}</p>
    <p className='text-l font-medium text-white'>{value}</p>
  </div>
);
export default DetailCard;
