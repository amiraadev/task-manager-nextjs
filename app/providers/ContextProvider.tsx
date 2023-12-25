/** @format */

"use client";
import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";

interface Props {
	children: React.ReactNode;
}
function ContextProvider({ children }: Props) {
	return (
		<div>
			<GlobalStyleProvider>{children}</GlobalStyleProvider>
		</div>
	);
}

export default ContextProvider;
