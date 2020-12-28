"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../User");
function parseThread(thread) {
    const customizations = thread.customization_info;
    return {
        id: thread.thread_key.thread_fbid || thread.thread_key.other_user_id,
        name: thread.name,
        isGroup: thread.is_group_thread,
        participants: thread.all_participants ?
            thread.all_participants.nodes
                .map(user => user.messaging_actor || user)
                .map(User_1.parseUser) :
            null,
        image: thread.image ? thread.image.uri : null,
        unreadCount: thread.unread_count,
        canReply: thread.can_viewer_reply,
        cannotReplyReason: thread.cannot_reply_reason,
        isArchived: thread.has_viewer_archived,
        color: customizations && customizations.outgoing_bubble_color ?
            '#' + customizations.outgoing_bubble_color.substr(2).toLowerCase() : null,
        emoji: customizations ? customizations.custom_like_emoji : null,
        nicknames: customizations ? customizations.participant_customizations : null
    };
}
exports.default = parseThread;
//# sourceMappingURL=parseThread.js.map