import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCodeSigningConfig$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteCodeSigningConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteCodeSigningConfig", {})
    .n("LambdaClient", "DeleteCodeSigningConfigCommand")
    .sc(DeleteCodeSigningConfig$)
    .build() {
}
