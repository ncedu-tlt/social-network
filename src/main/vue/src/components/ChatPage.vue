<template>
    <v-container class="chat-shell" v-if="id">
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-layout row fill-height>
                <v-flex md12>
                    <Chat :chat-id="id"/>
                </v-flex>
            </v-layout>
        </div>
        <div v-else>
            <v-layout class="list-layout" row fill-height>
                <v-flex md4>
                    <ChatList/>
                </v-flex>
                <v-flex md8>
                    <Chat :chat-id="id"/>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
    <v-container class="chat-shell" v-else>
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-layout class="list-layout" row fill-height>
                <v-flex md12>
                    <ChatList/>
                </v-flex>
            </v-layout>
        </div>
        <div v-else>
            <v-layout class="list-layout" row fill-height>
                <v-flex md4>
                    <ChatList/>
                </v-flex>
                <v-flex md8>
                    <Chat :chat-id="id"/>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
import ChatList from './ChatList';
import Chat from './Chat';

export default {
    name: 'ChatPage',
    components: {
        ChatList,
        Chat
    },
    props: {
        id: {
            type: String,
            required: false,
            default: ''
        }
    }
};
</script>
<style scoped>
    .chat-shell,.chat-shell > div{
        height: 100%;
        max-height: 100%;
    }
    .list-layout{
        max-height: 85vh;
    }
</style>
