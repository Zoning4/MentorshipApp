import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { PublishLayerVersion$ } from "../schemas/schemas_0";
export { $Command };
export class PublishLayerVersionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PublishLayerVersion", {})
    .n("LambdaClient", "PublishLayerVersionCommand")
    .sc(PublishLayerVersion$)
    .build() {
}
