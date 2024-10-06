import {useState, useEffect} from 'react';
// React hook to check if CSS declaration is supported by browser
export const useSupports = (supportCondition: string) => {
// Create a state to store declaration check result
const [checkResult, setCheckResult] = useState<boolean | undefined>();
useEffect(() => {
// Run check as a side effect, on user side only
setCheckResult(CSS.supports(supportCondition));
}, [supportCondition]);
return checkResult;
};

// CSS browser specific CSS declarations
const hacksMapping = {
	firefox: '-moz-appearance:none',
	safari: '-webkit-hyphens:none',
	chrome: 'not (-webkit-hyphens:none)) and (not (-moz- appearance: none ) ) and (list-style-type:"*"'
}
// React hook to detect browser engine vendor
export const useDetectBrowser = () => {
	const isFirefox = useSupports(hacksMapping.firefox);
	const isChrome = useSupports(hacksMapping.chrome);
	const isSafari = useSupports(hacksMapping.safari);
	return [
		{browser: 'firefox', condition: isFirefox},
		{browser: 'chromium based', condition: isChrome},
		{browser: 'safari', condition: isSafari},
	].find(({condition}) => condition) ?. browser;
};
