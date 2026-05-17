import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutFunctionEventInvokeConfig$ } from "../schemas/schemas_0";
export { $Command };
export class PutFunctionEventInvokeConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionEventInvokeConfig", {})
    .n("LambdaClient", "PutFunctionEventInvokeConfigCommand")
    .sc(PutFunctionEventInvokeConfig$)
    .build() {
}
