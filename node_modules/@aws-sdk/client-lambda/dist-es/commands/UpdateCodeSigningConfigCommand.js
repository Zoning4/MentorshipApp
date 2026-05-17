import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCodeSigningConfig$ } from "../schemas/schemas_0";
export { $Command };
export class UpdateCodeSigningConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateCodeSigningConfig", {})
    .n("LambdaClient", "UpdateCodeSigningConfigCommand")
    .sc(UpdateCodeSigningConfig$)
    .build() {
}
