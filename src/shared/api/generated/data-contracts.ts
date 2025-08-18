/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BlockNodeDto {
  blocktype: string;
  content: string;
  createdAt: string;
  documentId: string;
  id: string;
  parentId: string;
  position: number;
  updatedAt: string;
}

export interface CreateBlockNodeDto {
  blocktype: string;
  content: string;
  documentId: string;
  parentId: string;
  position: number;
}

export interface CreateCatDto {
  age: number;
  breed: string;
  name: string;
}

export interface DocumentControllerGetOneParams {
  id: string;
  includeTargets: string;
  shape: string;
}

export interface UpdateBlockNodeDto {
  blocktype: string;
  content: string;
  documentId: string;
  parentId: string;
  position: number;
}

export interface UpdateCatDto {
  age: number;
  breed: string;
  name: string;
}
