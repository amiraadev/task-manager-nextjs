/** @format */

"use client";
import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
	children: React.ReactNode;
}
function ContextProvider({ children }: Props) {
	return (
		<div>
			<GlobalProvider>
				{children}
			</GlobalProvider>
		</div>
	);
}

export default ContextProvider;
