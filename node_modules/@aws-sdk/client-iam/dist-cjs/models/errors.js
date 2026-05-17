"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPublicKeyException = exports.DuplicateSSHPublicKeyException = exports.InvalidCertificateException = exports.DuplicateCertificateException = exports.MalformedCertificateException = exports.KeyPairMismatchException = exports.PolicyEvaluationException = exports.UnrecognizedPublicKeyEncodingException = exports.CredentialReportNotReadyException = exports.CredentialReportNotPresentException = exports.CredentialReportExpiredException = exports.ReportGenerationLimitExceededException = exports.FeatureEnabledException = exports.CallerIsNotManagementAccountException = exports.InvalidAuthenticationCodeException = exports.FeatureDisabledException = exports.ServiceAccessNotEnabledException = exports.OrganizationNotInAllFeaturesModeException = exports.OrganizationNotFoundException = exports.DeleteConflictException = exports.ServiceNotSupportedException = exports.MalformedPolicyDocumentException = exports.OpenIdIdpCommunicationErrorException = exports.PasswordPolicyViolationException = exports.InvalidUserTypeException = exports.EntityTemporarilyUnmodifiableException = exports.PolicyNotAttachableException = exports.UnmodifiableEntityException = exports.EntityAlreadyExistsException = exports.LimitExceededException = exports.InvalidInputException = exports.AccountNotManagementOrDelegatedAdministratorException = exports.ServiceFailureException = exports.NoSuchEntityException = exports.ConcurrentModificationException = void 0;
const IAMServiceException_1 = require("./IAMServiceException");
class ConcurrentModificationException extends IAMServiceException_1.IAMServiceException {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
class NoSuchEntityException extends IAMServiceException_1.IAMServiceException {
    name = "NoSuchEntityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoSuchEntityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoSuchEntityException.prototype);
    }
}
exports.NoSuchEntityException = NoSuchEntityException;
class ServiceFailureException extends IAMServiceException_1.IAMServiceException {
    name = "ServiceFailureException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServiceFailureException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceFailureException.prototype);
    }
}
exports.ServiceFailureException = ServiceFailureException;
class AccountNotManagementOrDelegatedAdministratorException extends IAMServiceException_1.IAMServiceException {
    name = "AccountNotManagementOrDelegatedAdministratorException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AccountNotManagementOrDelegatedAdministratorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccountNotManagementOrDelegatedAdministratorException.prototype);
        this.Message = opts.Message;
    }
}
exports.AccountNotManagementOrDelegatedAdministratorException = AccountNotManagementOrDelegatedAdministratorException;
class InvalidInputException extends IAMServiceException_1.IAMServiceException {
    name = "InvalidInputException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInputException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInputException.prototype);
    }
}
exports.InvalidInputException = InvalidInputException;
class LimitExceededException extends IAMServiceException_1.IAMServiceException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class EntityAlreadyExistsException extends IAMServiceException_1.IAMServiceException {
    name = "EntityAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EntityAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    }
}
exports.EntityAlreadyExistsException = EntityAlreadyExistsException;
class UnmodifiableEntityException extends IAMServiceException_1.IAMServiceException {
    name = "UnmodifiableEntityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnmodifiableEntityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
    }
}
exports.UnmodifiableEntityException = UnmodifiableEntityException;
class PolicyNotAttachableException extends IAMServiceException_1.IAMServiceException {
    name = "PolicyNotAttachableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PolicyNotAttachableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyNotAttachableException.prototype);
    }
}
exports.PolicyNotAttachableException = PolicyNotAttachableException;
class EntityTemporarilyUnmodifiableException extends IAMServiceException_1.IAMServiceException {
    name = "EntityTemporarilyUnmodifiableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EntityTemporarilyUnmodifiableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EntityTemporarilyUnmodifiableException.prototype);
    }
}
exports.EntityTemporarilyUnmodifiableException = EntityTemporarilyUnmodifiableException;
class InvalidUserTypeException extends IAMServiceException_1.IAMServiceException {
    name = "InvalidUserTypeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidUserTypeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidUserTypeException.prototype);
    }
}
exports.InvalidUserTypeException = InvalidUserTypeException;
class PasswordPolicyViolationException extends IAMServiceException_1.IAMServiceException {
    name = "PasswordPolicyViolationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PasswordPolicyViolationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PasswordPolicyViolationException.prototype);
    }
}
exports.PasswordPolicyViolationException = PasswordPolicyViolationException;
class OpenIdIdpCommunicationErrorException extends IAMServiceException_1.IAMServiceException {
    name = "OpenIdIdpCommunicationErrorException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpenIdIdpCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpenIdIdpCommunicationErrorException.prototype);
    }
}
exports.OpenIdIdpCommunicationErrorException = OpenIdIdpCommunicationErrorException;
class MalformedPolicyDocumentException extends IAMServiceException_1.IAMServiceException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
class ServiceNotSupportedException extends IAMServiceException_1.IAMServiceException {
    name = "ServiceNotSupportedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotSupportedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotSupportedException.prototype);
    }
}
exports.ServiceNotSupportedException = ServiceNotSupportedException;
class DeleteConflictException extends IAMServiceException_1.IAMServiceException {
    name = "DeleteConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DeleteConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DeleteConflictException.prototype);
    }
}
exports.DeleteConflictException = DeleteConflictException;
class OrganizationNotFoundException extends IAMServiceException_1.IAMServiceException {
    name = "OrganizationNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OrganizationNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OrganizationNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
exports.OrganizationNotFoundException = OrganizationNotFoundException;
class OrganizationNotInAllFeaturesModeException extends IAMServiceException_1.IAMServiceException {
    name = "OrganizationNotInAllFeaturesModeException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OrganizationNotInAllFeaturesModeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
        this.Message = opts.Message;
    }
}
exports.OrganizationNotInAllFeaturesModeException = OrganizationNotInAllFeaturesModeException;
class ServiceAccessNotEnabledException extends IAMServiceException_1.IAMServiceException {
    name = "ServiceAccessNotEnabledException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ServiceAccessNotEnabledException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceAccessNotEnabledException.prototype);
        this.Message = opts.Message;
    }
}
exports.ServiceAccessNotEnabledException = ServiceAccessNotEnabledException;
class FeatureDisabledException extends IAMServiceException_1.IAMServiceException {
    name = "FeatureDisabledException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "FeatureDisabledException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, FeatureDisabledException.prototype);
    }
}
exports.FeatureDisabledException = FeatureDisabledException;
class InvalidAuthenticationCodeException extends IAMServiceException_1.IAMServiceException {
    name = "InvalidAuthenticationCodeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidAuthenticationCodeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAuthenticationCodeException.prototype);
    }
}
exports.InvalidAuthenticationCodeException = InvalidAuthenticationCodeException;
class CallerIsNotManagementAccountException extends IAMServiceException_1.IAMServiceException {
    name = "CallerIsNotManagementAccountException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "CallerIsNotManagementAccountException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CallerIsNotManagementAccountException.prototype);
        this.Message = opts.Message;
    }
}
exports.CallerIsNotManagementAccountException = CallerIsNotManagementAccountException;
class FeatureEnabledException extends IAMServiceException_1.IAMServiceException {
    name = "FeatureEnabledException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "FeatureEnabledException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, FeatureEnabledException.prototype);
    }
}
exports.FeatureEnabledException = FeatureEnabledException;
class ReportGenerationLimitExceededException extends IAMServiceException_1.IAMServiceException {
    name = "ReportGenerationLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ReportGenerationLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ReportGenerationLimitExceededException.prototype);
    }
}
exports.ReportGenerationLimitExceededException = ReportGenerationLimitExceededException;
class CredentialReportExpiredException extends IAMServiceException_1.IAMServiceException {
    name = "CredentialReportExpiredException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportExpiredException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportExpiredException.prototype);
    }
}
exports.CredentialReportExpiredException = CredentialReportExpiredException;
class CredentialReportNotPresentException extends IAMServiceException_1.IAMServiceException {
    name = "CredentialReportNotPresentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportNotPresentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportNotPresentException.prototype);
    }
}
exports.CredentialReportNotPresentException = CredentialReportNotPresentException;
class CredentialReportNotReadyException extends IAMServiceException_1.IAMServiceException {
    name = "CredentialReportNotReadyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportNotReadyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportNotReadyException.prototype);
    }
}
exports.CredentialReportNotReadyException = CredentialReportNotReadyException;
class UnrecognizedPublicKeyEncodingException extends IAMServiceException_1.IAMServiceException {
    name = "UnrecognizedPublicKeyEncodingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnrecognizedPublicKeyEncodingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnrecognizedPublicKeyEncodingException.prototype);
    }
}
exports.UnrecognizedPublicKeyEncodingException = UnrecognizedPublicKeyEncodingException;
class PolicyEvaluationException extends IAMServiceException_1.IAMServiceException {
    name = "PolicyEvaluationException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "PolicyEvaluationException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyEvaluationException.prototype);
    }
}
exports.PolicyEvaluationException = PolicyEvaluationException;
class KeyPairMismatchException extends IAMServiceException_1.IAMServiceException {
    name = "KeyPairMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "KeyPairMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, KeyPairMismatchException.prototype);
    }
}
exports.KeyPairMismatchException = KeyPairMismatchException;
class MalformedCertificateException extends IAMServiceException_1.IAMServiceException {
    name = "MalformedCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MalformedCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedCertificateException.prototype);
    }
}
exports.MalformedCertificateException = MalformedCertificateException;
class DuplicateCertificateException extends IAMServiceException_1.IAMServiceException {
    name = "DuplicateCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateCertificateException.prototype);
    }
}
exports.DuplicateCertificateException = DuplicateCertificateException;
class InvalidCertificateException extends IAMServiceException_1.IAMServiceException {
    name = "InvalidCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidCertificateException.prototype);
    }
}
exports.InvalidCertificateException = InvalidCertificateException;
class DuplicateSSHPublicKeyException extends IAMServiceException_1.IAMServiceException {
    name = "DuplicateSSHPublicKeyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateSSHPublicKeyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateSSHPublicKeyException.prototype);
    }
}
exports.DuplicateSSHPublicKeyException = DuplicateSSHPublicKeyException;
class InvalidPublicKeyException extends IAMServiceException_1.IAMServiceException {
    name = "InvalidPublicKeyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPublicKeyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPublicKeyException.prototype);
    }
}
exports.InvalidPublicKeyException = InvalidPublicKeyException;
