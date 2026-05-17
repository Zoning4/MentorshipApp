import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendDurableExecutionCallbackFailure$ } from "../schemas/schemas_0";
export { $Command };
export class SendDurableExecutionCallbackFailureCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "SendDurableExecutionCallbackFailure", {})
    .n("LambdaClient", "SendDurableExecutionCallbackFailureCommand")
    .sc(SendDurableExecutionCallbackFailure$)
    .build() {
}
