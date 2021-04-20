module.exports = {
  // sockets
  SOCKET_REQUEST_CONNECT: 'user/SOCKET_REQUEST_CONNECT',
  SOCKET_AUTH_ERROR: 'user/SOCKET_AUTH_ERROR',
  // library
  LIBRARY_FILTER_STRING: 'library/FILTER_KEYWORD',
  LIBRARY_FILTER_STRING_RESET: 'library/FILTER_KEYWORD_CLEAR',
  LIBRARY_FILTER_TOGGLE_STARRED: 'library/TOGGLE_FILTER_STARRED',
  TOGGLE_ARTIST_EXPANDED: 'library/TOGGLE_ARTIST_EXPANDED',
  TOGGLE_ARTIST_RESULT_EXPANDED: 'library/TOGGLE_ARTIST_RESULT_EXPANDED',
  SCROLL_ARTISTS: 'library/SCROLL_ARTISTS',
  SONG_STARRED: 'library/SONG_STARRED',
  SONG_UNSTARRED: 'library/SONG_UNSTARRED',
  STAR_COUNTS_PUSH: 'library/STAR_COUNTS_PUSH',
  LIBRARY_PUSH: 'library/PUSH',
  LIBRARY_PUSH_SONG: 'library/PUSH_SONG',
  // queue
  QUEUE_PUSH: 'queue/PUSH',
  QUEUE_ADD: 'server/QUEUE_ADD',
  QUEUE_REMOVE: 'server/QUEUE_REMOVE',
  // player internal
  PLAYER_UPDATE: 'player/UPDATE',
  // player room commands
  PLAYER_CMD_OPTIONS: 'player/CMD_OPTIONS',
  PLAYER_CMD_NEXT: 'player/CMD_NEXT',
  PLAYER_CMD_PAUSE: 'player/CMD_PAUSE',
  PLAYER_CMD_PLAY: 'player/CMD_PLAY',
  PLAYER_CMD_VOLUME: 'player/CMD_VOLUME',
  PLAYER_REQ_OPTIONS: 'server/PLAYER_REQ_OPTIONS',
  PLAYER_REQ_PLAY: 'server/PLAYER_REQ_PLAY',
  PLAYER_REQ_PAUSE: 'server/PLAYER_REQ_PAUSE',
  PLAYER_REQ_NEXT: 'server/PLAYER_REQ_NEXT',
  PLAYER_REQ_VOLUME: 'server/PLAYER_REQ_VOLUME',
  PLAYER_EMIT_STATUS: 'server/PLAYER_EMIT_STATUS',
  PLAYER_EMIT_LEAVE:  'server/PLAYER_EMIT_LEAVE',
  // player events
  PLAYER_STATUS: 'status/PLAYER_STATUS',
  PLAYER_ERROR: 'status/PLAYER_ERROR',
  PLAYER_LEAVE: 'status/PLAYER_LEAVE',
  PLAYER_LOAD: 'status/PLAYER_LOAD',
  PLAYER_PLAY: 'status/PLAYER_PLAY',
  PLAYER_VISUALIZER_ERROR: 'status/PLAYER_VISUALIZER_ERROR',
  // user
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  CREATE_ACCOUNT: 'user/CREATE_ACCOUNT',
  UPDATE_ACCOUNT: 'user/UPDATE_ACCOUNT',
  REQUEST_ACCOUNT: 'user/REQUEST_ACCOUNT',
  REQUEST_ROOMS: 'rooms/REQUEST_ROOMS',
  ROOM_UPDATE: 'rooms/UPDATE',
  ROOM_CREATE: 'rooms/CREATE',
  ROOM_REMOVE: 'rooms/REMOVE',
  ROOM_EDITOR_OPEN: 'rooms/EDITOR_OPEN',
  ROOM_EDITOR_CLOSE: 'rooms/EDITOR_CLOSE',
  ROOM_TOGGLE_SHOW_ALL: 'rooms/TOGGLE_SHOW_ALL',
  STAR_SONG: 'server/STAR_SONG',
  UNSTAR_SONG: 'server/UNSTAR_SONG',
  STARS_PUSH: 'user/STARS_PUSH',
  // prefs
  PREFS_REQUEST: 'prefs/REQUEST',
  PREFS_SET: 'server/PREFS_SET',
  PREFS_RECEIVE: 'prefs/RECEIVE',
  PREFS_PUSH: 'prefs/PREFS_PUSH',
  PREFS_REQ_SCANNER_START: 'prefs/REQ_SCANNER_START',
  PREFS_REQ_SCANNER_STOP: 'prefs/REQ_SCANNER_STOP',
  // user management
  USERS_CREATE: 'users/CREATE',
  USERS_EDITOR_OPEN: 'users/EDITOR_OPEN',
  USERS_EDITOR_CLOSE: 'users/EDITOR_CLOSE',
  USERS_RECEIVE: 'users/RECEIVE',
  USERS_REMOVE: 'users/REMOVE',
  USERS_REQUEST: 'users/REQUEST',
  USERS_UPDATE: 'users/UPDATE',
  // ui
  HEADER_HEIGHT_CHANGE: 'ui/HEADER_HEIGHT_CHANGE',
  FOOTER_HEIGHT_CHANGE: 'ui/FOOTER_HEIGHT_CHANGE',
  SHOW_ERROR_MESSAGE: 'ui/SHOW_ERROR_MESSAGE',
  CLEAR_ERROR_MESSAGE: 'ui/CLEAR_ERROR_MESSAGE',
  UI_WINDOW_RESIZE: 'ui/WINDOW_RESIZE',
  // songInfo
  SONG_INFO_REQUEST: 'songInfo/SONG_INFO_REQUEST',
  SONG_INFO_SET_PREFERRED: 'songInfo/SET_PREFERRED',
  SONG_INFO_CLOSE: 'songInfo/SONG_INFO_CLOSE',
  // IPC messages
  SCANNER_CMD_START: 'scannerWorker/CMD_START',
  SCANNER_CMD_STOP: 'scannerWorker/CMD_STOP',
  SCANNER_WORKER_STATUS: 'scannerWorker/STATUS',
  SERVER_WORKER_STATUS: 'serverWorker/STATUS',
  SERVER_WORKER_ERROR: 'serverWorker/ERROR',
  LIBRARY_MATCH_SONG: 'scannerWorker/LIBRARY_MATCH_SONG',
  MEDIA_ADD: 'scannerWorker/MEDIA_ADD',
  MEDIA_CLEANUP: 'scannerWorker/MEDIA_CLEANUP',
  MEDIA_REMOVE: 'scannerWorker/MEDIA_REMOVE',
  MEDIA_UPDATE: 'scannerWorker/MEDIA_UPDATE',
  // misc
  _SUCCESS: '_SUCCESS',
  _ERROR: '_ERROR',
}
