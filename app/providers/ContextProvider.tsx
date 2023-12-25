/** @format */

"use client";
import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
	children: React.ReactNode;
}
function ContextProvider({ children }: Props) {
	const [isReady, setIsReady] = React.useState(false);
	React.useEffect(() => {
		setTimeout(() => {
			setIsReady(true);
		}, 200);
	}, []);
	if (!isReady) {
		return null;
	}
	return (
		<div>
			<GlobalProvider>{children}</GlobalProvider>
		</div>
	);
}

export default ContextProvider;
