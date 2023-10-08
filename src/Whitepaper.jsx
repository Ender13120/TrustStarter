import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const whitePaperStyles = {
  padding: "2em",
  margin: "2em",
  lineHeight: "1.6",
  background: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  maxWidth: "800px",
};

function WhitePaperPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        TrustStarter Whitepaper
      </Typography>
      <Paper style={whitePaperStyles}>
        <Typography variant="h4" gutterBottom>
          TrustStarter Abstract:
        </Typography>
        <Typography variant="body1" paragraph>
          This decentralized application (DApp) offers a more
          accountable and transparent variation of the traditional
          Kickstarter platform. By leveraging the Ethereum blockchain,
          the system empowers backers with voting rights, ensuring
          projects are held accountable for their milestones before
          funds are disbursed.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Key Features:
        </Typography>

        <Typography variant="body1" paragraph>
          <Typography variant="body1">
            <strong>Milestone-Based Payouts:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Project creators define various milestones with
                corresponding descriptions and percentage allocations
                from the total campaign goal.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Funds are disbursed to the campaign owner only when a
                milestone is achieved and approved by the backers.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1">
            <strong>Backer Voting System:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Backers have the right to vote on the completion of
                each milestone.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                If a milestone vote fails three times consecutively,
                the campaign is deemed inactive.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1">
            <strong>Dissolution Voting:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                The campaign owner can initiate a dissolution vote.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A successful dissolution vote ends the campaign
                prematurely.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1">
            <strong>Refund Mechanism:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                In cases of campaign failure, investors can withdraw
                refunds proportional to their investment.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1">
            <strong>Open Comments:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Campaign owners can add comments to their campaigns,
                providing regular updates or necessary clarifications
                to backers.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1">
            <strong>Transparent Access:</strong>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                All campaign details, milestones, votes, and comments
                are publicly accessible.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Investors can track campaigns they've backed, ensuring
                transparency.
              </Typography>
            </li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Benefits:
        </Typography>
        <Typography variant="body1" paragraph>
          • Enhanced Accountability: The milestone-based structure
          ensures projects are making promised progress before funds
          are released. • Backer Empowerment: By giving backers a
          voice through the voting mechanism, they can ensure their
          funds are used appropriately. • Transparency: Every
          transaction and decision is recorded on the blockchain,
          providing unparalleled transparency to all participants. •
          Security: Leveraging Ethereum's smart contract capability
          ensures that the rules of the platform are executed as
          written, minimizing trust-based risks.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Why do we need Web3 in the current Space?
        </Typography>
        <Typography variant="body1" paragraph>
          While Kickstarter and Indiegogo (et al) have revolutionized
          crowdfunding, enabling countless innovations to come to
          life, they have not been without their challenges. One
          significant issue that has plagued these platforms is the
          emergence of fraudulent projects or creators who fail to
          deliver on their promises, leaving backers without their
          expected rewards or any form of recompense. This problem
          stems from the inherent trust-based model where funds are
          disbursed upfront without stringent accountability measures.
          Unlike TrustStarter, once a project on Kickstarter or
          Indiegogo meets its funding goal, the creator receives the
          funds almost immediately, regardless of whether they fulfill
          their project commitments. In contrast, TrustStarter's
          milestone-based disbursement system, combined with the
          backer voting mechanism, directly addresses this
          vulnerability. By holding project creators accountable for
          each stage of their development and only releasing funds
          upon achieving and validating milestones, TrustStarter
          offers a more robust, transparent, and reliable platform.
          This approach drastically reduces the potential for scams
          and failed projects, offering backers greater confidence and
          security in their investments.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Summary:
        </Typography>
        <Typography variant="body1" paragraph>
          TrustStarter aims to revitalize the crowdfunding model by
          providing a transparent, accountable, and decentralized
          Kickstarter alternative. By prioritizing backer rights and
          project accountability through blockchain technology, it
          fosters trust, ensures progress, and sets a new standard for
          crowdfunding platforms in the future.
        </Typography>
      </Paper>
    </Container>
  );
}

export default WhitePaperPage;
