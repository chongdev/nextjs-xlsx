import { CashFlowCashBalanceData } from "./CashFlowCashBalanceData";
import { CashFlowInterestExpensesData } from "./CashFlowInterestExpensesData";
import { CashFlowShortTermLoanData } from "./CashFlowShortTermLoanData";
import { CashFlowStatementData } from "./CashFlowStatementData";
import { CashFlowTermLoanData } from "./CashFlowTermLoanData";

const topics: any[] = [];

// งบกระแสเงินสด :  statement
topics.push({
    name: `งบกระแสเงินสด`,
    items: CashFlowStatementData,
});

topics.push({
    name: `ดุลเงินสด`,
    items: CashFlowCashBalanceData,
});

topics.push({
    name: `เงินกู้ระยะยาว`,
    items: CashFlowTermLoanData,
});

topics.push({
    name: `เงินกู้ระยะสั้น`,
    items: CashFlowShortTermLoanData,
});

topics.push({
    name: `ดอกเบี้ยจ่าย`,
    items: CashFlowInterestExpensesData,
});

export const CashFlowData = topics;