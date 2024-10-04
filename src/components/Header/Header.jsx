import profile from  '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mt-4 items-center mb-4'>
            <h1 className="text-3xl font-bold">Knowege cafe Project</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;