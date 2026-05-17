import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFunctionConcurrency$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteFunctionConcurrencyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunctionConcurrency", {})
    .n("LambdaClient", "DeleteFunctionConcurrencyCommand")
    .sc(DeleteFunctionConcurrency$)
    .build() {
}
