fx_version 'cerulean'
games {"gta5", "rdr3"}

author "Sly"
version '1.0.0'

lua54 'yes'

ui_page 'web/dist/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
  'web/dist/index.html',
  'web/dist/**/*'
}