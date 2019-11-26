/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createTypes } from 'utils/redux'

enum Types {
  LOAD_DISPLAYS = 'davinci/Display/LOAD_DISPLAYS',
  LOAD_DISPLAYS_SUCCESS = 'davinci/Display/LOAD_DISPLAYS_SUCCESS',
  LOAD_DISPLAYS_FAILURE = 'davinci/Display/LOAD_DISPLAYS_FAILURE',

  ADD_DISPLAY = 'davinci/Display/ADD_DISPLAY',
  ADD_DISPLAY_SUCCESS = 'davinci/Display/ADD_DISPLAY_SUCCESS',
  ADD_DISPLAY_FAILURE = 'davinci/Display/ADD_DISPLAY_FAILURE',

  EDIT_DISPLAY = 'davinci/Display/EDIT_DISPLAY',
  EDIT_DISPLAY_SUCCESS = 'davinci/Display/EDIT_DISPLAY_SUCCESS',
  EDIT_DISPLAY_FAILURE = 'davinci/Display/EDIT_DISPLAY_FAILURE',

  EDIT_CURRENT_DISPLAY = 'davinci/Display/EDIT_CURRENT_DISPLAY',
  EDIT_CURRENT_DISPLAY_SUCCESS = 'davinci/Display/EDIT_CURRENT_DISPLAY_SUCCESS',
  EDIT_CURRENT_DISPLAY_FAILURE = 'davinci/Display/EDIT_CURRENT_DISPLAY_FAILURE',

  EDIT_CURRENT_SLIDE = 'davinci/Display/EDIT_CURRENT_SLIDE',
  EDIT_CURRENT_SLIDE_SUCCESS = 'davinci/Display/EDIT_CURRENT_SLIDE_SUCCESS',
  EDIT_CURRENT_SLIDE_FAILURE = 'davinci/Display/EDIT_CURRENT_SLIDE_FAILURE',

  UPLOAD_CURRENT_SLIDE_COVER = 'davinci/Display/UPLOAD_CURRENT_SLIDE_COVER',
  UPLOAD_CURRENT_SLIDE_COVER_SUCCESS = 'davinci/Display/UPLOAD_CURRENT_SLIDE_COVER_SUCCESS',
  UPLOAD_CURRENT_SLIDE_COVER_FAILURE = 'davinci/Display/UPLOAD_CURRENT_SLIDE_COVER_FAILURE',

  DELETE_DISPLAY = 'davinci/Display/DELETE_DISPLAY',
  DELETE_DISPLAY_SUCCESS = 'davinci/Display/DELETE_DISPLAY_SUCCESS',
  DELETE_DISPLAY_FAILURE = 'davinci/Display/DELETE_DISPLAY_FAILURE',

  LOAD_DISPLAY_DETAIL = 'davinci/Display/LOAD_DISPLAY_DETAIL',
  LOAD_DISPLAY_DETAIL_SUCCESS = 'davinci/Display/LOAD_DISPLAY_DETAIL_SUCCESS',
  LOAD_DISPLAY_DETAIL_FAILURE = 'davinci/Display/LOAD_DISPLAY_DETAIL_FAILURE',

  ADD_DISPLAY_LAYERS = 'davinci/Display/ADD_DISPLAY_LAYERS',
  ADD_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/ADD_DISPLAY_LAYERS_SUCCESS',
  ADD_DISPLAY_LAYERS_FAILURE = 'davinci/Display/ADD_DISPLAY_LAYERS_FAILURE',

  EDIT_DISPLAY_LAYERS = 'davinci/Display/EDIT_DISPLAY_LAYERS',
  EDIT_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/EDIT_DISPLAY_LAYERS_SUCCESS',
  EDIT_DISPLAY_LAYERS_FAILURE = 'davinci/Display/EDIT_DISPLAY_LAYERS_FAILURE',

  DELETE_DISPLAY_LAYERS = 'davinci/Display/DELETE_DISPLAY_LAYERS',
  DELETE_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/DELETE_DISPLAY_LAYERS_SUCCESS',
  DELETE_DISPLAY_LAYERS_FAILURE = 'davinci/Display/DELETE_DISPLAY_LAYERS_FAILURE',

  DRAG_SELECT_LAYER = 'davinci/Display/DRAG_SELECT_LAYER',
  RESIZE_LAYERS = 'davinci/Display/RESIZE_LAYERS',
  SELECT_LAYER = 'davinci/Display/SELECT_LAYER',
  CLEAR_LAYERS_SELECTION = 'davinci/Display/CLEAR_LAYERS_SELECTION',

  TOGGLE_LAYERS_RESIZING_STATUS= 'davinci/Display/TOGGLE_LAYERS_RESIZING_STATUS',
  TOGGLE_LAYERS_DRAGGING_STATUS= 'davinci/Display/TOGGLE_LAYERS_DRAGGING_STATUS',

  SHOW_EDITOR_BASELINES = 'davinci/Display/SHOW_EDITOR_BASELINES',
  CLEAR_EDITOR_BASELINES = 'davinci/Display/CLEAR_EDITOR_BASELINES',

  COPY_SLIDE_LAYERS = 'davinci/Display/COPY_SLIDE_LAYERS',
  PASTE_SLIDE_LAYERS = 'davinci/Display/PASTE_SLIDE_LAYERS',
  PASTE_SLIDE_LAYERS_SUCCESS = 'davinci/Display/PASTE_SLIDE_LAYERS_SUCCESS',
  PASTE_SLIDE_LAYERS_FAILURE = 'davinci/Display/PASTE_SLIDE_LAYERS_FAILURE',

  UNDO_OPERATION = 'davinci/Display/UNDO_OPERATION',
  UNDO_OPERATION_SUCCESS = 'davinci/Display/UNDO_OPERATION_SUCCESS',
  UNDO_OPERATION_FAILURE = 'davinci/Display/UNDO_OPERATION_FAILURE',
  REDO_OPERATION = 'davinci/Display/REDO_OPERATION',
  REDO_OPERATION_SUCCESS = 'davinci/Display/REDO_OPERATION_SUCCESS',
  REDO_OPERATION_FAILURE = 'davinci/Display/REDO_OPERATION_FAILURE',

  LOAD_DISPLAY_SHARE_LINK = 'davinci/Display/LOAD_DISPLAY_SHARE_LINK',
  LOAD_DISPLAY_SHARE_LINK_SUCCESS = 'davinci/Display/LOAD_DISPLAY_SHARE_LINK_SUCCESS',
  LOAD_DISPLAY_SECRET_LINK_SUCCESS = 'davinci/Display/LOAD_DISPLAY_SECRET_LINK_SUCCESS',
  LOAD_DISPLAY_SHARE_LINK_FAILURE = 'davinci/Display/LOAD_DISPLAY_SHARE_LINK_FAILURE',

  RESET_DISPLAY_STATE = 'davinci/Display/RESET_DISPLAY_STATE',

  MONITORED_SYNC_DATA_ACTION = 'davinci/Display/MONITORED_SYNC_DATA_ACTION',
  MONITORED_SEARCH_DATA_ACTION = 'davinci/Display/MONITORED_SEARCH_DATA_ACTION',
  MONITORED_LINKAGE_DATA_ACTION = 'davinci/Display/MONITORED_LINKAGE_DATA_ACTION',

  LOAD_CURRENT_PROJECT = 'davinci/Display/LOAD_CURRENT_PROJECT',
  LOAD_CURRENT_PROJECT_SUCCESS = 'davinci/Display/LOAD_CURRENT_PROJECT_SUCCESS',
  LOAD_DISPLAY_PREVIEW_PICTURE = 'davinci/Display/LOAD_DISPLAY_PREVIEW_PICTURE'
}

export const ActionTypes = createTypes(Types)
