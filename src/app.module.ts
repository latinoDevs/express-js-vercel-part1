import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './oauth/oauth.module';
import { SlackModule } from './slack/slack.module';
import { NotionModule } from './notion/notion.module';
import { TiktokModule } from './tiktok/tiktok.module';
import { ZapierModule } from './zapier/zapier.module';
import { MetaEventsModule } from './meta-events/meta-events.module';
import { MessengerModule } from './messenger/messenger.module';
import { ManychatModule } from './manychat/manychat.module';
import { InstagramModule } from './instagram/instagram.module';
import { GptModule } from './gpt/gpt.module';
import { AwsLambdaModule } from './aws-lambda/aws-lambda.module';
import { MakeModule } from './make/make.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
   AuthModule,
   SlackModule,
   NotionModule,
   TiktokModule,
   ZapierModule,
   MetaEventsModule,
   MessengerModule,
   ManychatModule,
   InstagramModule,
   GptModule,
   AwsLambdaModule,
   MakeModule,
   AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})

export class AppModule {

}
