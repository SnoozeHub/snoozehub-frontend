
<template>
    <v-container fluid fill-height class="text-center">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 style="margin: 2% auto;">
                <v-card class="elevation-12">
                    <v-card-text>
                        <div class="d-flex flex-row align-center">
                            <v-icon large color="error" style="margin-right: 4px;">mdi-alert-circle</v-icon>
                            <h1> The current page has not been implemented yet</h1>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="$router.back">{{ $t('go_back') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
