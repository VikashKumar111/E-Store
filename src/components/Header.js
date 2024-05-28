import React from "react";
import Logo from "./Logo";

const Header = () => {
    return <header>
        <div className="container mx-auto">
            <div className="">
                <Logo w={90} h={60} />
            </div>
        </div>
    </header>;
};

export default Header;