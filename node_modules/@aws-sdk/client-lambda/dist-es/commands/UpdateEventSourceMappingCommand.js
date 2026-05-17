import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEventSourceMapping$ } from "../schemas/schemas_0";
export { $Command };
export class UpdateEventSourceMappingCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateEventSourceMapping", {})
    .n("LambdaClient", "UpdateEventSourceMappingCommand")
    .sc(UpdateEventSourceMapping$)
    .build() {
}
