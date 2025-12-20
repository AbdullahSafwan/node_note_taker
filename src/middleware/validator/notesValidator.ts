import { body, param, query } from 'express-validator';

// Validation rules
export const createNoteValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 255 })
    .withMessage('Title must not exceed 255 characters'),
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required'),
];

export const updateNoteValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Note ID is required')
    .isUUID()
    .withMessage('Invalid note ID format'),
  body('title')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Title cannot be empty if provided')
    .isLength({ max: 255 })
    .withMessage('Title must not exceed 255 characters'),
  body('content')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Content cannot be empty if provided'),
];

export const getNoteByIdValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Note ID is required')
    .isUUID()
    .withMessage('Invalid note ID format'),
];

export const deleteNoteValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Note ID is required')
    .isUUID()
    .withMessage('Invalid note ID format'),
];

export const searchNotesValidation = [
  query('q')
    .trim()
    .notEmpty()
    .withMessage('Search query is required')
    .isLength({ min: 1, max: 500 })
    .withMessage('Search query must be between 1 and 500 characters'),
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
];

export const listNotesValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
];

export const getVersionHistoryValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Note ID is required')
    .isUUID()
    .withMessage('Invalid note ID format'),
];

export const revertToVersionValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Note ID is required')
    .isUUID()
    .withMessage('Invalid note ID format'),
  body('versionNumber')
    .notEmpty()
    .withMessage('Version number is required')
    .isInt({ min: 1 })
    .withMessage('Version number must be a positive integer'),
  body('changeDescription')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Change description must not exceed 500 characters'),
];

export const searchNotesVersionsValidator = [
  query('q')
    .trim()
    .notEmpty()
    .withMessage('Search query is required')
    .isLength({ min: 1, max: 500 })
    .withMessage('Search query must be between 1 and 500 characters'),
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
];