import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddLayerVersionPermission$ } from "../schemas/schemas_0";
export { $Command };
export class AddLayerVersionPermissionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "AddLayerVersionPermission", {})
    .n("LambdaClient", "AddLayerVersionPermissionCommand")
    .sc(AddLayerVersionPermission$)
    .build() {
}
