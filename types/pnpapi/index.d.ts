// Type definitions for pnpapi 3.0
// Project: https://yarnpkg.github.io/berry/advanced/pnpapi
// Definitions by: Maël Nison <https://github.com/arcanis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node"/>

declare namespace NodeJS {
    interface ProcessVersions {
        pnp?: string;
    }
}

declare module 'pnpapi' {
    export interface PhysicalPackageLocator {
        name: string;
        reference: string;
    }

    export interface TopLevelPackageLocator {
      name: null;
      reference: null;
    }

    export type PackageLocator =
      | PhysicalPackageLocator
      | TopLevelPackageLocator;

    export interface PackageInformation {
        packageLocation: string;
        packageDependencies: Map<string, null | string | [string, string]>;
        linkType: 'HARD' | 'SOFT';
    }

    export const VERSIONS: { std: number; [key: string]: number };

    export const topLevel: { name: null; reference: null };

    export function getDependencyTreeRoots(): PackageLocator[];

    export function getPackageInformation(locator: PackageLocator): PackageInformation;

    export function findPackageLocator(location: string): PackageLocator | null;

    export function resolveToUnqualified(
        request: string,
        issuer: string | null,
        opts?: { considerBuiltins?: boolean },
    ): string | null;

    export function resolveUnqualified(unqualified: string, opts?: { extensions?: string[] }): string;

    export function resolveRequest(
      request: string,
      issuer: string | null,
      opts?: { considerBuiltins?: boolean; extensions?: string[] },
    ): string | null;

    export function setup(): void;
}
