const HeaderItem = ({ Icons, title }) => {
  return (
    <div className="group m-1 p-2 w-12 items-center flex flex-col mt-5 md:m-4">
      <Icons className=" h-7 group-hover:animate-bounce cursor-pointer " />
      <p className="opacity-0 group-hover:opacity-100 cursor-pointer text-center w-12">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
