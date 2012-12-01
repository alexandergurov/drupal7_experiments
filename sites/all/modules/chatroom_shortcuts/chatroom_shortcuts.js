/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */   
(function ($) {
    $(document).ready(function(){
        $('.chatroom_shortcuts_button').each(function(){
            $(this).click(function(e){
                e.preventDefault();
                e.stopPropagation();                
                var form_id = $(this).parents('form').attr('id');
                var chat = Drupal.settings.chatroom.chats[form_id.replace(/^chatroom-irc-buttons-form-/, '')];
                if(chat == undefined){
                    chat = get_chat_from_list(form_id.replace(/^chatroom-irc-buttons-form-/, ''));
                }
                var reg = 'edit-chatroom-shortcuts-button-'+chat.cid+'-';
                var sh_id = $(this).attr('id').replace(reg, '');
                var text = $('input[name|="chatroom_shortcuts_message_' + chat.cid + '_'+ sh_id +'"]').val();
                
                $('#edit-chatroom-message-entry-box-' + chat.cid).val(text);
                $('#edit-chatroom-message-entry-box-' + chat.cid).focus();
                return false;
            });
        });
        
        // TODO: move that function to global chatroom obj
        function get_chat_from_list(id){
            for (var chat in Drupal.settings.chatroom.chats) {
                if(Drupal.settings.chatroom.chats[chat].cid == id)
                    return Drupal.settings.chatroom.chats[chat];
            }
            return null;
        }
    })
})(jQuery);