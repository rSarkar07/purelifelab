export default function Footer() {
    return (
        <div className="bg-[#5d46d4] h-[220px] mt-4 py-3 text-white md:mt-[156px] xl:mt-[168px] text-center">
            <p className="mt-10">Pure Life Lab <span className="ml-3   text-[#85827e] hover:text-white"> <a href="https://purelifelab.vercel.app/">Home </a> </span> <span className="ml-2 text-[#85827e] hover:text-white"> <a href="/page/about">About </a> </span> <span className="ml-2 text-[#85827e] hover:text-white"> <a href="/page/ourmission">Our Mission </a> </span></p>
            <p>Socials <span className="ml-3 text-[#85827e] hover:text-white"> <a href="">YouTube </a> </span> <span className="ml-2 text-[#85827e] hover:text-white"> <a href="">Instagram </a> </span> <span className="ml-2 text-[#85827e] hover:text-white"> <a href=""> Pinterest </a> </span></p>
            <p className="text-[#85827e] hover:text-white"><a href="/page/policy">Policy</a></p>
            <p> Vector Source :-  <a className="text-[#85827e] hover:text-white font-bold" href="https://www.freepik.com/free-photos-vectors/login" target="_blank">Freepik</a> </p>
            <p className="flex justify-center"> <a href=""> <img src="/logo.png" alt="logo" width={"150px"}/></a></p>
            <p className="text-orange-300">&#169; 2023 Pure Life Lab</p>
        </div>
    )
}