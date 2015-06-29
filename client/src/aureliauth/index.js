import {AuthService} from './authService';
export {AuthService} from './authService';
import {BaseConfig} from './baseConfig';


export function configure(aurelia, configCallback){
	var baseConfig = aurelia.container.get(BaseConfig);
	if(configCallback !== undefined && typeof(configCallback) === 'function')
	{
		configCallback(baseConfig);
	}
};

