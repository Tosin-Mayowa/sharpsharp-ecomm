import { AiOutlineShoppingCart,AiOutlineSearch } from "react-icons/ai";
import classess from "./NavBar.module.css";
import Link from "next/link";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
export const NavBar = () => {
  return (
    <nav className={classess.Nav}>
      <div className={classess.NavDiv}>
        <h2>Logo</h2>
        <ul className={classess.ListParent}>
          <li className={classess.List}>
            <Link href="/">
              <a className={classess.Link}>Home</a>
            </Link>
          </li>
          <li className={classess.Dropdown}>
          <Link href="/electronics">
            <a className={classess.Link}>Electronics</a>
            </Link>
            <div className={classess.DropdownContent}>
            <Link href="/electronics">
              <p className={classess.SubLink}>Home Appliances</p>
              </Link>
              <Link href="/electronics/mobile">
              <p className={classess.SubLink}>mobile phones</p>
              </Link>
              <Link href="/electronics/computer">
              <p className={classess.SubLink}>computer</p>
              </Link>
            </div>
          </li>
          <li className={classess.List}>
          <Link href="/grocery">
            <a className={classess.Link}>Grocery</a>
            </Link>
          </li>
          <li className={classess.Dropdown}>
            <Link href="/food">
              <a className={classess.Link}>food</a>
            </Link>
            <div className={classess.DropdownContent}>
            <Link href="/food/rawfood">
              <p className={classess.SubLink}>Raw food</p>
              </Link>
              <Link href="/food/meal">
              <p className={classess.SubLink}>meal</p>
              </Link>
            </div>
          </li>
          <li className={classess.Dropdown}>
          <Link href="/wears">
            <a className={classess.Link}>Wears</a>
            </Link>
            <div className={classess.DropdownContent}>
            <Link href="/wears/female">
              <p className={classess.SubLink}>female wears</p>
              </Link>
              <Link href="/wears/male">
              <p className={classess.SubLink}>male wears</p>
              </Link>
              <Link href="/wears/children">
              <p className={classess.SubLink}>children wears</p>
              </Link>
            </div>
          </li>
          <li className={classess.List}>
          <Link href="/kitchen">
            <a className={classess.Link}>Kitchen</a>
            </Link>
          </li>
        </ul>
        <div className={classess.Icon}>
          <AiOutlineShoppingCart />
      <div>
        <AiOutlineSearch/>
        <input type='text' placeholder='search your products'/>
      </div>
        </div>
      </div>
    </nav>
  );
};
