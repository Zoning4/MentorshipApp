import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCodeSigningConfig$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCodeSigningConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateCodeSigningConfig", {})
    .n("LambdaClient", "CreateCodeSigningConfigCommand")
    .sc(CreateCodeSigningConfig$)
    .build() {
}
