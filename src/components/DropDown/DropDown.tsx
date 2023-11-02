"use client";

import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from "./DropDownStyles";

import Link from "next/link";

const Dropdown = () => {
	
	const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Select an Option <FaCaretDown />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
			<DropdownMenuItem>
        <Link onClick={closeDropdown} href="/option">Option 1</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
        <Link onClick={closeDropdown} href="/option-two">Option 2</Link>
			</DropdownMenuItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export { Dropdown };
