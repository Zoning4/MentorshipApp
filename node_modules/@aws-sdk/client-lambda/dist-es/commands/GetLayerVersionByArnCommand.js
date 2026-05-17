import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLayerVersionByArn$ } from "../schemas/schemas_0";
export { $Command };
export class GetLayerVersionByArnCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetLayerVersionByArn", {})
    .n("LambdaClient", "GetLayerVersionByArnCommand")
    .sc(GetLayerVersionByArn$)
    .build() {
}
