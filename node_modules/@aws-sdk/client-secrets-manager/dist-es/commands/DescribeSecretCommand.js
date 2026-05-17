import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecret$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecretCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("secretsmanager", "DescribeSecret", {})
    .n("SecretsManagerClient", "DescribeSecretCommand")
    .sc(DescribeSecret$)
    .build() {
}
