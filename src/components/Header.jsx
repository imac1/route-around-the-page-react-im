import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<ul className="flex flex-row border items-center gap-4 w-full bg-stone-100 p-4 [&_li:hover]:scale-105">
				<div className="font-bold text-5xl flex grow gap-2">
					<p className="hover:text-stone-600"><Link to="/">Growth</Link></p>
					<span class="material-symbols-outlined text-blue-500 ">edit</span>
				</div>
                <li className="text-xl"><Link to="features">Features</Link></li>
                <li className="text-xl"> <Link to="about">About Us</Link></li>
                <li className="text-xl"><Link to="blog">Blog</Link></li>
                <li><button className="rounded-md bg-slate-200 px-6 py-2 hover:shadow-lg">Log in</button></li>
			</ul>
		</div>
	);
};
export default Header;
