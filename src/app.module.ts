import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationService } from './authentication/authentication.service';
import { GoogleSheetsService } from './google-sheets/google-sheets.service';
import { NotionService } from './notion/notion.service';
import { ManychatService } from './manychat/manychat.service';
import { MessengerService } from './messenger/messenger.service';
import { InstagramService } from './instagram/instagram.service';
import { MetaEventsService } from './meta-events/meta-events.service';
import { OauthService } from './oauth/oauth.service';
import { AwsLambdaService } from './aws-lambda/aws-lambda.service';
import { TiktokService } from './tiktok/tiktok.service';
import { ZapierService } from './zapier/zapier.service';
import { MakeService } from './make/make.service';
import { SlacjService } from './slacj/slacj.service';
import { SlackService } from './slack/slack.service';
import { GptService } from './gpt/gpt.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthenticationService, GoogleSheetsService, NotionService, ManychatService, MessengerService, InstagramService, MetaEventsService, OauthService, AwsLambdaService, TiktokService, ZapierService, MakeService, SlacjService, SlackService, GptService],
})
export class AppModule {}
