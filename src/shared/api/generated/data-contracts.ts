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

export interface AuthLoginDto {
  email: string;
  password: string;
}

export interface AuthRegisterDto {
  displayName: string;
  email: string;
  password: string;
}

export interface BlockNodeContentDto {
  blocktype: string;
  content: string;
  parentId?: string;
  position: number;
}

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
  parentId?: string;
  position: number;
}

export interface CreateCatDto {
  age: number;
  breed: string;
  name: string;
}

export interface CreateDocumentDto {
  title: string;
}

export interface CreateExerciseDto {
  description: string;
  tags: string[];
  title: string;
}

export interface CreateFlashcardDto {
  /** Блок-нод контент для "задней" стороны */
  backDocumentNodes: BlockNodeContentDto[];
  /** Необязательный id колоды, куда сразу положить карту */
  deckId?: string;
  /** Блок-нод контент для лицевой стороны */
  faceDocumentNodes: BlockNodeContentDto[];
}

export interface CreateTemplateDto {
  clusters: TrainingClusterDto[];
  title: string;
}

export type CreateTimesliceDto = object;

export interface DocumentResponseDto {
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export interface DocumentWithBlocksResponseDto {
  blocks: BlockNodeDto[];
  createdAt: string;
  id: string;
  title?: string;
  updatedAt: string;
}

export interface TrainingClusterDto {
  sets: TrainingSetDto[];
}

export interface TrainingSetDto {
  count: number;
  exerciseId: string;
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

export type UpdateTimesliceDto = object;
