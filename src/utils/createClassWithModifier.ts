export const createClassWithModifier = <M>(baseClass: string, modified: M) => {
	return `${baseClass}_${modified}`;
};
