import * as log from 'bog';
import { WebClient } from '@slack/web-api';
import { SocketModeClient } from '@slack/socket-mode';
import { RTMMock, WebMock } from '../../test/lib/slackMock';
import config from '../config';

const { slackMock } = config.misc;

log.debug('Slack mockApi loaded', slackMock);

export default {
    rtm: slackMock ? new RTMMock() : new SocketModeClient({ appToken: config.slack.app_token, logLevel: config.misc.log_level }),
    wbc: slackMock ? new WebMock() : new WebClient(config.slack.api_token),
};
