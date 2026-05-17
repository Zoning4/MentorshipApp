import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRuntimeManagementConfig$ } from "../schemas/schemas_0";
export { $Command };
export class PutRuntimeManagementConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutRuntimeManagementConfig", {})
    .n("LambdaClient", "PutRuntimeManagementConfigCommand")
    .sc(PutRuntimeManagementConfig$)
    .build() {
}
