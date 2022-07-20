import {parse, format} from 'node:path/posix';


function getDirectory(path) {
	return format(parse(path.slice(0, Math.max(0, path.indexOf('*')))));
}


export {
	getDirectory,
};
