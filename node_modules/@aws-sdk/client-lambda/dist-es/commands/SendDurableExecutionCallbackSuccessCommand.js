import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendDurableExecutionCallbackSuccess$ } from "../schemas/schemas_0";
export { $Command };
export class SendDurableExecutionCallbackSuccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "SendDurableExecutionCallbackSuccess", {})
    .n("LambdaClient", "SendDurableExecutionCallbackSuccessCommand")
    .sc(SendDurableExecutionCallbackSuccess$)
    .build() {
}
