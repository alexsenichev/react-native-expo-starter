import { snakeCase } from 'lodash';
import application from './application';
import network from './network';

interface IGenericConfig {
  [key: string]: number | string;
}

/**
 * Converts camel/pascal case variable names to uppercased environment variables
 * @param name string
 */
const nameToEnvVar = (name: string) => snakeCase(name).toUpperCase();

/**
 * Look for environment for a values to override configuration
 * Meant to be used mostly in CI to build an application with development/testing/production configuration
 * @param config General configuration object
 */
const override = <ConfigType>(config: IGenericConfig) => {
  return Object.freeze(
    Object.keys(config).reduce(
      (all, key) => ({ ...all, ...{ [key]: process.env[nameToEnvVar(key)] || config[key] } }),
      {},
    ),
  ) as ConfigType;
};

export const networkConfig = override<typeof network>(network);
export const applicationConfig = override<typeof application>(application);
